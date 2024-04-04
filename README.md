**TrafficAI App**

**Requirements:**
- Python
- Node.js

**Clone the App:**
```bash
git clone https://github.com/aadi235/trafficAI.git
```

Download the ML model from [here](https://drive.google.com/file/d/1tGISr0EY3tGwLTLmZocaaTN4VmyJu4Xg/view?usp=sharing). Extract the ZIP file and move the `dnn_model` folder to the `backend` directory of the cloned repository `trafficAI`.

**Steps to Run the App:**

1. **Install Backend:**
   - Navigate to the `backend` directory.
   - Install Python dependencies using pip:
     ```bash
     pip install -r requirements.txt
     ```
   
2. **Install Frontend:**
   - Navigate to the `frontend` directory.
   - Install Node.js dependencies using npm:
     ```bash
     npm install
     ```
   
3. **Run Backend:**
   - Inside the `backend` directory, run:
     - For Windows:
       ```bash
       python app.py
       ```
     - For Linux:
       ```bash
       python3 app.py
       ```
   - The backend will open on port 3000.

4. **Run Frontend:**
   - Inside the `frontend` directory, run:
     ```bash
     npm start
     ```
   - This will open the default browser, and the app will run at `localhost:5000`.

**Working with the App:**
- Choose an image using the "Choose File" option.
- Your selected image will appear in the left container.
- Click "Upload", and the processed image will be displayed on the right container.
- The total count of vehicles will be displayed inside the processed image and also at the bottom of the result container.

That's it! You should now be able to run and use the TrafficAI app locally on your machine. Enjoy analyzing traffic images!
