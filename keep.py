import gkeepapi
from flask import Flask, jsonify, request, render_template
app = Flask(__name__)

keep = gkeepapi.Keep()

keep.login('masha.michouris@gmail.com','Hamster1!318')

#token = keep.getMasterToken()
#keyring.set_password('google-keep-token', username, token)

glist = keep.createList('Title', [
('Peepeepoopoo', False), # Not checked
('bababooey', False),
('Dingy is smelly >:)', False)
])

keep.sync()