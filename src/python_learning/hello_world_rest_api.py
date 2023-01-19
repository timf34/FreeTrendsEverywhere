from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def hello():
    query_word = request.json['search_Query']
    return jsonify(message=f'Hello, {query_word}!')


if __name__ == '__main__':
    app.run(debug=True)
