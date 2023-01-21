from flask import Flask, jsonify, request, Response, send_file
from flask_cors import CORS

from misc.pytrends_processing import PyTrendsProcessing

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
    print("entering graph")
    print("here we are", request.get_data())
    query_word = request.get_json()
    print("query_word: ", query_word)
    data = pt.get_data(keyword_list=[query_word])
    data.plot_data(data, query_word, "Date", "Interest", show=False)
    data.save_plot(data, query_word, "Date", "Interest", "graph.svg")



@app.route('/endpoint', methods=['POST'])
def endpoint():
    data = request.get_data()
    print(data)
    return jsonify({"message":"Data received"})



if __name__ == '__main__':
    app.run(debug=True)
