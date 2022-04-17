import sys
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
@app.route('/api/users/<int:userid>', methods=['GET', 'PUT'])
def handleUserById(userid):
    if request.method == 'GET':
        return UserController().getSpecificUser(userid)
    elif  request.method == 'PUT':
        return UserController().updateUser(userid, request.json)
    else:
        return jsonify("Method Not Allowed"), 405

# This route:
# 1. Lists all groups in the system (GET)
@app.route('/api/groups', methods=['GET'])
def handle_all_groups():
    if request.method == "GET":
        return GroupController().getAllGroups()
    else:
        return jsonify("Method Not Allowed"), 405

# This route:
# 1. Lists group in the system with id groupid (GET)
@app.route('/api/groups/<int:groupid>', methods=['GET'])
def handle_specific_group(groupid):
    if request.method == "GET":
        return GroupController().getSpecificGroup(groupid)
    else:
        return jsonify("Method Not Allowed"), 405

# This route:
# 1. Lists all students in the system (GET)
@app.route('/api/students', methods=['GET'])
def handle_all_students():
    if request.method == "GET":
        return StudentController().getAllStudents()
    else:
        return jsonify("Method Not Allowed"), 405

# This route:
# 1. Lists student in the system with id studentid (GET)
@app.route('/api/students/<int:studentid>', methods=['GET'])
def handle_specific_student(studentid):
    if request.method == "GET":
        return StudentController().getSpecificStudents(studentid)
    else:
        return jsonify("Method Not Allowed"), 405

###########################  Register/Login Actions  ######################

# -------------- Register/Login Actions --------------
# This route:
# 1. Registers a new student (POST)
@app.route('/api/register/student', methods=['POST'])
def registerStudent():
    if request.method == "POST":
        try:
            role = "student"
            userid = UserController().addNewUser(request.json, role)
            return StudentController().addNewStudent(request.json, userid)
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
            return UserController().loginUser(request.json)
            # TODO: login user
            pass
        except:
            return jsonify(Error="Login was not allowed"), 400
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Student follows Group (POST)
@app.route('/api/follow', methods=['POST'])
def followUsers():
    if request.method == "POST":
        return StudentController().followGroup(request.json)
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Gets all the following Users from specific Users (GET)
@app.route('/api/follows/<int:groupid>', methods=['GET'])
def getAllFollowingUsers(groupid):
    if request.method == "GET":
        return StudentController().getAllFollowingUsers(groupid)
    else:
        return jsonify(Error="Method not allowed"), 405

# This route:
# 1. Student unfollows a specific group (POST)
@app.route('/api/unfollow', methods=['POST'])
def unfollowGroup():
    if request.method == "POST":
        return StudentController().unfollowGroup(request.json)
    else:
        return jsonify(Error="Method not allowed"), 405


# -------------- Message Actions --------------
# This route:
# 1. Group posts a New Announcement (POST)
# 2. Get all messages posted (GET)
@app.route('/api/posts', methods=['GET','POST'])
def handlePosts():
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