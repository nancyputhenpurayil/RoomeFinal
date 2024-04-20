from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"

mongo = PyMongo(app)

@app.route('/')
def home():
    mongo.db.test.insert_one({"name": "Hello, World!"})
    return "Connected to MongoDB and inserted a document."

if __name__ == '__main__':
    app.run(debug=True)

# from flask import Flask

# app = Flask(__name__)

# @app.route("/")
# def hello_world():
#     return "<h1>Hello, World!</h1>"

# print("Hello world")  