@echo off
echo ========= DeliverOps AUTO START =========
echo.

echo [1] FRONTEND kuruluyor...
cd frontend
call npm install
start "" cmd /k "npm run dev"

echo.
echo [2] BACKEND kuruluyor...
cd ..
cd backend
call npm install
start "" cmd /k "npm run dev"

echo.
echo ========= HAZIR =========
echo FRONTEND: http://localhost:5173
echo BACKEND:  http://localhost:4000
echo Swagger:  http://localhost:4000/docs
