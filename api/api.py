from flask import Flask

app = Flask(__name__)

app.route('/date')


def get_todays_date():
    return {'date': '2020/11/23'}
