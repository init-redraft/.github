from flask import Flask, request, jsonify
from monitor.db import find_by_record_number

app = Flask(__name__)

@app.route("/check")
def check_record():
    """
    Endpoint to check if a record number exists in the database.
    Matches any filename that starts with the given record number.
    """
    record_number = request.args.get("record")
    if not record_number:
        return jsonify({"error": "No record number provided"}), 400

    matches = find_by_record_number(record_number)
    if matches:
        return jsonify({
            "record": record_number,
            "found": True,
            "matches": matches
        })
    else:
        return jsonify({
            "record": record_number,
            "found": False
        })

if __name__ == "__main__":
    app.run(debug=True)