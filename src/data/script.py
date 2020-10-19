import os
import json
from pathlib import Path
import pathlib

def create_dict(files):
    data = []
    for idx, f in enumerate(files):
        data.append({ 'id': idx, 'filename': f, 'caption': (os.path.splitext(f)[0]).replace('_'," ").replace('-'," ").capitalize() })
    print(data)
    return data

d = []
files_arr = []
path = os.getcwd()
subfolders = [f.path for f in os.scandir(path) if f.is_dir()]

for folder in subfolders:
    print(([f for f in os.listdir( 'C:\\Users\\msi\\Local Sites\\react\\shorsh\\react-sass-boilerplate\\src\\data\\about\\' ) if os.path.isfile(f)]))

os.listdir('C:\\Users\\msi\\Local Sites\\react\\shorsh\\react-sass-boilerplate\\src\\data\\about')

""" for path, subdirs, files in os.walk(root):
    for name in files:
        files_arr = ([f for f in os.listdir( os.path.join(path, name)) if os.path.isfile(f)])
        #print(files_arr) """

