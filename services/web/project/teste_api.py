import requests

def testAPI():
    content = requests.get('http://localhost:5000/api')
    print(content.status_code)
    print(content.text)
testAPI()