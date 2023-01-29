import os
from flask import Flask, jsonify, request, Response, send_file
from flask_cors import CORS

from pytrends_processing import PyTrendsProcessing

app = Flask(__name__)
CORS(app)

pt = PyTrendsProcessing()


@app.route('/', methods=['POST'])
def hello():
    query_word = request.json['searchQuery']
    data = pt.prepare_data(keyword_list=[query_word])
    return jsonify(message=f'Hello, {data}!')


@app.route('/graph.svg', methods=['GET', 'POST'])
def graph():
    query_word = request.json['searchQuery']

    df = pt.get_data([query_word])
    pt.save_plot(df, query_word, "Date", "Interest", "graph.svg")

    with open('graph.svg', 'rb') as f:
        response =  Response(f.read(), content_type='image/svg+xml')
    return response


if __name__ == '__main__':
    app.run(debug=True)
