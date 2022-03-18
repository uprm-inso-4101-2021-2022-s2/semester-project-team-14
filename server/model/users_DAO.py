from config.dbconfig import pg_config
import psycopg2


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
         return userid

     def getAllUsers(self):
         cursor = self.conn.cursor()
         query = "SELECT * FROM users;"
         cursor.execute(query)
         result = []
         for row in cursor:
             result.append(row)
         return result

     def getSpecificUser(self, userid):
         cursor = self.conn.cursor()
         query = "SELECT * FROM users AND userid=%s;" % (userid)
         cursor.execute(query)
         result = []
         for row in cursor:
             result.append(row)
         return result
