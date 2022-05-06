from config.dbconfig import pg_config
import psycopg2
from werkzeug.security import generate_password_hash, check_password_hash
class UsersDAO:

    def __init__(self):
        connection_url = "dbname=%s user=%s password=%s  port=%s host = %s" % (
            pg_config['dbname'],
            pg_config['user'],
            pg_config['password'],
            pg_config['dbport'],
            pg_config['host']
        )
        self.conn = psycopg2.connect(connection_url)

    def addNewUser(self, first_name, last_name, email, password, role, isValidated):
        cursor = self.conn.cursor()
        query = "INSERT INTO users(first_name, last_name, email, password, role, isValidated) VALUES (%s,%s,%s,%s,%s,%s) RETURNING userid;"
        cursor.execute(query, (first_name, last_name, email, password, role, isValidated))
        userid = cursor.fetchone()[0]
        self.conn.commit()
        emailverificaton = "TODO: send email verification to user"
        return userid

    def getAllUsers(self):
        cursor = self.conn.cursor()
        query = "SELECT * FROM users;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def loginUser(self, email, password):
        # TODO: Compare passwords
        print("Comparing passwords")
        cursor = self.conn.cursor()
        query = "SELECT * FROM users where email=%s;" 
        cursor.execute(query, (email,))
        row = cursor.fetchone()
        if row is None:
            return "No user found"
        else:
           for row in cursor:
               if(cursor and check_password_hash(row[4], password)):
                   return "User authenticated"
               else:
                   return "Wrong Password"
           return "Couldn't be authenticated"

    def getSpecificUser(self, userid):
        cursor = self.conn.cursor()
        query = "SELECT * FROM users where userid=%s;" % (userid)
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def updateUser(self, userid, first_name, last_name, email, password, role, isValidated):
        cursor = self.conn.cursor()
        query = "UPDATE users SET first_name = %s, last_name = %s, email = %s, password = %s, role = %s, isValidated = %s WHERE userid = %s;"
        cursor.execute(query, (first_name, last_name, email, password, role, isValidated, userid))
        affected_rows = cursor.rowcount
        self.conn.commit()
        return affected_rows != 0
