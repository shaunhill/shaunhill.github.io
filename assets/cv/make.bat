e:
cd "E:\Cloud\OneDrive\www\shaunhill.github.io\assets\cv"

pandoc --standalone -c style.css --from markdown --to html -o shaun_dean_hill.html shaun_dean_hill.md

"C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe" shaun_dean_hill.html shaun_dean_hill.pdf

pandoc --from markdown --to docx -o shaun_dean_hill.docx shaun_dean_hill.md

pandoc --standalone --smart --from markdown --to plain -o shaun_dean_hill.txt shaun_dean_hill.md

for /d %%a in (*) do (ECHO zip -r -p "%%~na.zip" ".\%%a\*")
pause
