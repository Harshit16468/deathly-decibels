import sqlite3
conn = sqlite3.connect('playlist.db')
c = conn.cursor()
c.execute('''SELECT * FROM Playlists''')
data=c.fetchall()
print(data)
conn.commit()
conn.close()