from flask import Flask, render_template, request, redirect, jsonify, make_response, get_template_attribute
from datetime import datetime
from calc import carshare_calculator
import json
import time

app = Flask(__name__)

output_columns = ['Service', 'Subscription', 'Plan', 'Car type', 'Kilometer fee', 'Minute fee', 'Fixed rate',
                  'Overtime fee', 'Overmilage fee', 'Package fee', 'Monthly cost', 'Discount', 'Total cost']


@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# @app.route("/calculator", methods=["GET", "POST"])
# def calculator():
#     if request.method == "POST":
#         req = request.form
#         kilometers = int(request.form["kilometers"])
#         minutes = int(request.form["minutes"])
#         frequency = int(request.form["frequency"])
#
#         missing = list()
#
#         for k, v in req.items():
#             if v == "":
#                 missing.append(k)
#
#         if missing:
#             feedback = f"Missing fields for {', '.join(missing)}"
#             return render_template("public/calculator.html", feedback=feedback)
#
#         table = carshare_calculator(
#             minutes=minutes,
#             kilometers=kilometers,
#             frequency=frequency
#         ).sort_values('Total cost').round(2).head()
#
#         table = table[output_columns].replace(0, '-')
#
#         table_headers = table.columns.values
#
#         return render_template("public/calculator.html", table=table, table_headers=table_headers)
#         # km = request.form['kilometers']
#         # time = request.form['minutes']
#         # return json.dumps({'status': 'OK', 'user': km, 'pass': time})
#
#     table = carshare_calculator(
#         minutes=int(60),
#         kilometers=int(100),
#         frequency=int(1)
#     ).sort_values('Total cost').round(2).head()
#
#     table = table[output_columns].replace(0, '-')
#
#     table_headers = table.columns.values
#
#     return render_template("public/calculator.html", table=table, table_headers=table_headers)
#
#
# @app.route('/contact', methods=['GET', 'POST'])
# def contact():
#     if request.method == 'POST':
#
#         kilometers = int(request.form['kilometers'])
#         minutes = int(request.form['minutes'])
#         frequency = int(request.form['frequency'])
#
#         if 'retour' in request.form:
#             minutes = 2 * minutes
#             kilometers = 2 * kilometers
#
#         table = carshare_calculator(
#             minutes=minutes,
#             kilometers=kilometers,
#             frequency=frequency
#         ).sort_values('Total cost').round(2).head()
#
#         table = table[output_columns].replace(0, '-')
#
#         firstLine = table.iloc[0].to_json()
#
#         table_json = table.to_json(orient='records')
#
#         table = [table.to_html(classes='data', index=False)]
#
#         resp = {
#             'table': table,
#             'firstLine': firstLine,
#             'table_json': table_json
#         }
#
#         return make_response(jsonify(resp), 200)
#
#     elif request.method == 'GET':
#         """User is viewing the page"""
#         return "hello"


if __name__ == "__main__":
    app.run(debug=True)
