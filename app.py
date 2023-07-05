from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate():
    article = request.json['article']

    # NLP processing to generate the appropriate title
    nlp = pipeline('text2text-generation', model='t5-base', tokenizer='t5-base')
    generated_title = nlp(article, max_length=23, do_sample=False)[0]['generated_text'].strip()

    return jsonify({'header': generated_title})

if __name__ == '__main__':
    app.run()

