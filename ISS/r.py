from flask import Flask, request,jsonify
from flask_cors import CORS
import sqlite3
app = Flask(__name__)
CORS(app)

DATABASE = "playlist.db"

CREATE_TABLE = """CREATE TABLE IF NOT EXISTS Playlists (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    artist TEXT NOT NULL,
                    duration TEXT NOT NULL
                    );"""

def create_database():
    conn = sqlite3.connect(DATABASE)
    c = conn.cursor()

    c.execute(CREATE_TABLE)

    conn.commit()
    conn.close()
@app.route('/endpoint', methods=['GET'])
def get_playlist():
    create_database()
    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM Playlists" )
    data=cursor.fetchall()
    list=[]
    if data!=None:
        for i in data:

            if i!=None:
                list.append(i[0])

    return jsonify(list)
@app.route('/endpoint', methods=['POST'])

def endpoint():
    data = request.get_json()
    if not data or not all(key in data for key in ('song_name', 'artist', 'duration')):
        response = jsonify({'error': 'Invalid input data'})
        response.status_code = 400
        return response

    name = data['song_name']
    artist = data['artist']
    duration = data['duration']

    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Playlists WHERE name=? AND artist=?", (name, artist))
    existing_data = cursor.fetchone()

    if existing_data is None:
        cursor.execute("INSERT INTO Playlists (name, artist, duration) VALUES (?, ?, ?)", (name, artist, duration))
        conn.commit()
        response_data = {'status': 'success', 'id': cursor.lastrowid}
    else:
        response_data = {'status': 'error', 'message': 'Song data already exists in database'}

    conn.close()
    response = jsonify(response_data)
    return response
    



if __name__ == "__main__":
    app.run(debug=True,port=8000)
