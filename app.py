import os
import http.server
import socketserver

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=None, **kwargs)

port = 8080

html_file_name = "index.html"

#hmm
script_directory = os.path.dirname(os.path.realpath(__file__))


os.chdir(script_directory)

Handler = CustomHandler
httpd = socketserver.TCPServer(("", port), Handler)

print(f"Serving on port {port}. Open http://localhost:{port}/ in your web browser.")

try:
    httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer terminated by user.")
    httpd.server_close()
