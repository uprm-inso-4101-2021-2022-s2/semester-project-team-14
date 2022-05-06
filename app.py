from flask import Flask, request, jsonify
from flask_cors import CORS

from server.controller.MessageController import MessageController
from server.controller.UsersController import UserController
from server.controller.GroupController import GroupController
from server.controller.StudentController import StudentController

app = Flask(__name__)

CORS(app)  # apply CORS


# This route:
# 1. Lists all users in the system (GET)
@app.route('/api/users', methods=['GET'])
def handle_user():
    if request.method == "GET":
        return UserController().getAllUsers()
    else:
        return jsonify("Method Not Allowed"), 405


# This route does three things
# 1. Lists all users in the system (GET)
# 2. Update a users to the system (PUT)
# 3. Delete user with userid uid
@app.route('/api/users/<int:userid>', methods=['GET', 'PUT', 'DELETE'])
def handleUserById(uid):
    if request.method == 'GET':
        return UserController().getSpecificUser(uid)
    elif  request.method == 'PUT':
        return UserController().updateUser(uid, request.json)
    else:
        return jsonify("Method Not Allowed"), 405

###########################  Register/Login Actions  ######################

# -------------- Register/Login Actions --------------
# This route:
# 1. Registers a new student (POST)
@app.route('/api/register/student/', methods=['POST'])
def registerStudent():
    if request.method == "POST":
        try:
            role = "student"
            userid = UserController().addNewUser(request.json, role)
            StudentController().addNewStudent(request.json, userid)
        except:
            return jsonify(Error="POST was unsuccessful"), 500
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Registers a new group (POST)
@app.route('/api/register/group', methods=['POST'])
def registerGroup():
    if request.method == "POST":
        try:
            role = "group"
            input_json = request.json
            userid = UserController().addNewUser(input_json, role)
            return GroupController().addNewGroup(input_json, userid)
        except:
            return jsonify(Error="POST was unsuccessful"), 500
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Logs in the specific user with userid (POST)
@app.route('/api/login', methods=['POST'])
def loginUser():
    if request.method == "POST":
        try:
            input_json = request.json
            response = UserController().loginUser(input_json)
            return response
        except:
            return jsonify(Error="Login was not allowed"), 400
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Student follows Group (POST)
@app.route('/api/follow/<int:groupid>', methods=['POST'])
def followUsers(groupid):
    if request.method == "GET":
        #return StudentController().followGroup(groupid)
        # TODO: follow Group
        pass
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Gets all the following Users from specific Users (GET)
@app.route('/api/follows/<int:groupid>', methods=['GET'])
def getAllFollowingUsers(userid):
    if request.method == "GET":
        return StudentController().getAllFollowingUsers(userid)
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Student unfollows a specific group (POST)
@app.route('/api/unfollow/<int:userid>/', methods=['POST'])
def unfollowUser(userid):
    if request.method == "POST":
        return StudentController().unfollowUser(request.json, userid)
    else:
        return jsonify(Error="Method not allowed"), 405


# -------------- Message Actions --------------
# This route:
# 1. Group posts a New Announcement (POST)
# 2. Get all messages posted (GET)
@app.route('/api/posts', methods=['GET','POST'])
def postNewMessage():
    if request.method == "POST":
        return MessageController().postNewMessage(request.json)
    elif request.method == "GET":
        return MessageController().getAllMessages()
    else:
        return jsonify(Error="Method not allowed"), 405

# -------------- Message Actions --------------
# This route:
# 1. Gets a posted message(POST)
@app.route('/api/posts/<int:postid>', methods=['GET'])
def getNewMessageWithID(postid):
    if request.method == "GET":
        return MessageController().getSpecificMessage(postid)
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Gets all posted messages by groupid (POST)
@app.route('/api/postsby/<int:groupid>', methods=['GET'])
def getAllMessagesByGroupID(groupid):
    if request.method == "GET":
        return MessageController().getAllMessagesByGroupid(groupid)
    else:
        return jsonify(Error="Method not allowed"), 405

if __name__ == '__main__':
    app.run(debug=True)