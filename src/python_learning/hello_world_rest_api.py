from flask import Flask, jsonify, request
from flask_cors import CORS

from pytrends_processing import PyTrendsProcessing

app = Flask(__name__)
CORS(app)

pt = PyTrendsProcessing()


@app.route('/', methods=['POST'])
def hello():
    query_word = request.json['searchQuery']
    data = pt.prepare_data(keyword_list=[query_word])
    print(data)
    # query_word = {"hello": "my bitches"}
    # TODO: note that even this doesn't work! We're just not allowed to make an external web request rn.
    return jsonify(message=f'Hello, {data}!')


if __name__ == '__main__':
    app.run(debug=True)
