import requests
from bs4 import BeautifulSoup
import re

def extract_year_from_filename(fname):
    match = re.search(r"(AR)?(20\d{2})", fname)
    return match.group(2) if match else None

def scrape_board(url, board_type):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    print(f"Scraping {board_type} from {url}")

    # Match links like ARMY_DRB_CY2025.htm or ARMY_BCMR_CY2024.htm
    raw_links = [
        link["href"] for link in soup.find_all("a", href=True)
        if re.match(rf"ARMY_{board_type}_CY20\d{{2}}\.htm", link["href"])
    ]

    # Deduplicate links
    folder_links = sorted(set(raw_links))
    print(f"Found {len(folder_links)} unique year pages: {folder_links}")

    records = []
    for folder in folder_links:
        folder_url = "https://boards.law.af.mil/" + folder
        year_match = re.search(r"CY(20\d{2})", folder)
        year = year_match.group(1) if year_match else None

        print(f"→ Scanning page: {folder_url}")
        sub_response = requests.get(folder_url)
        sub_soup = BeautifulSoup(sub_response.text, "html.parser")

        for link in sub_soup.find_all("a", href=True):
            href = link["href"]
            if href.lower().endswith((".pdf", ".txt", ".doc", ".rtf")):
                fname = href.split("/")[-1]

                # Construct full file URL based on known folder structure
                file_url = f"https://boards.law.af.mil/ARMY/{board_type}/CY{year}/{fname}"

                records.append({
                    "filename": fname,
                    "record_number": fname.split("_")[0] if "_" in fname else fname.split(".")[0],
                    "branch": "Army",
                    "board": board_type,
                    "year": year,
                    "file_type": fname.split(".")[-1].lower(),
                    "naming_pattern": "simple",
                    "url": file_url
                })
    return records

def scrape():
    bcmr_url = "https://boards.law.af.mil/ARMY_BCMR.htm"
    drb_url = "https://boards.law.af.mil/ARMY_DRB.htm"

    return scrape_board(bcmr_url, "BCMR") + scrape_board(drb_url, "DRB")

if __name__ == "__main__":
    records = scrape()
    print(f"\n✅ Found {len(records)} matching records.")
    for r in records[:5]:
        print(r)