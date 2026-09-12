@echo off
chcp 65001 >nul
title Xuất 51 Slide FPT Long Châu Ra Ảnh PNG Full HD
echo Đang tiến hành xuất slide ra ảnh...
cd /d "%~dp0"
python xuat_slide_ra_anh.py
echo.
echo Nhấn phím bất kỳ để mở thư mục ảnh đã xuất...
pause >nul
explorer "%~dp0thuyet_trinh\xuat_anh_slide"

