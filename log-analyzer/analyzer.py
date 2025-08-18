#opens a log file, reads the lines and parses them into a more readable format.

with open("logs.txt", "r") as file:
    logs = file.readlines()

# A loop to parse each log entry.

for entry in logs:
    entry = entry.strip() #Remove new line characters.

    parts = entry.split(" ", 3) #splits log into pertinent sections; Date, time, level and message.

    if len(parts) == 4:
        date = parts[0]
        time = parts[1]
        level = parts[2]
        message = parts[3]
    
        print(f"[{level}] {date} {time} - {message}")
    else:
        print(f"[MALFORMED] {entry}")