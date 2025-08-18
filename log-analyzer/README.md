# 📄 Log Analyzer/Parser

## 🧠 Overview

This is my first iteration of the log parser tool. The analyzer.py reads plantext log file, extracts key components (date, time, log level and message), and outputs a clean, readable format. It flags malformed enteries and is designed to be iterated upon. Future expansion to include multiple log format compatibility and exporting.

---

## 📦 Features

- Parses logs structured as: YYY-MM-DD HH:MM:SS LEVEL Message
- Outputs formatted logs: [LEVEL] YYYY-MM-DD HH:MM:SS - Message
- Flags malformed entries
- Modular design for future expansion
- Annotated code for clarity and maintainability

---

## 📁 File Structure

log_parser/
├── logs.txt              # Sample log file
├── parser.py             # Main parsing script
└── README.md             # Documentation

---

## 🚀 Usage

Ensure logs.txt is in the same directory or update the file path in analyzer.py

---

## 🧩 Code Logic

```with open("logs.txt", "r") as file:
    logs = file.readlines()

for entry in logs:
    entry = entry.strip()
    parts = entry.split(" ", 3)

    if len(parts) == 4:
        date, time, level, message = parts
        print(f"[{level}] {date} {time} - {message}")
    else:
        print(f"[MALFORMED] {entry}")```

---

## ⚠️ Limitations

*Assumes log format consistency. Malformed entries are flagged but not corrected. 
*`readlines()` loads entire file into memory. Inefficient for larger projects or live data streams.
*No export functionality yet (CSV/JSON planned for future iteration)
*No pattern recognition or log analysis yet (future module planned)

---

## 📌 TODO

*[] Add support for multiple log formats. (Ex. SIEM Specific, syslog)
*[] Implement streaming read for larger files or live data
*[] Track and count malformed entries
*[] Export parsed logs to CSV or JSON
*[] Build Analyzer module for pattern recognition, point of failure and threat identification. 

---

## 🔮 Future Expansion

This tool is the foundation for a modular log ingestion, analysis and archival pipeline. Planned upgrades include:

*Regex-based parsing for formating agnostic data source compatibility.
*CLI flags for format selection and output mode
*Integration for local SEIM or ELK stack
*Annotated OneNote field manual for reference

---

## 👤 Author

**Daniel**  
Risk management professional with a background in compliance and operational analysis.
  
Focused on modular tool development, log parsing, and system hardening.  
GitHub alias: `init_redraft`