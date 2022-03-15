import cv2
import os
in_file = 'ranking'
out_file = 'rankZip'
list1 = os.listdir(in_file)
for i in list1:
    img = cv2.imread(in_file + '/' + i)
    h,w,_ = img.shape
    img = cv2.resize(img,(256,256))
    cv2.imwrite(str(out_file + '/' + i),img)