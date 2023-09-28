# CamConnect 🎥 📞

## About the Application

This video call web app is designed to empower remote teams to collaborate more effectively. It provides a seamless video conferencing experience with integrated features such as screen sharing, a chat section, support for multiple participants, and customizable layout options. The app is built using React.js, vanilla CSS, and utilizes the ZEGOCLOUD Platform and Firebase for enhanced functionality.

### Features

🔗 Integrated Screen Sharing: Share your screen with participants during video calls, making it easy to present documents, slideshows, or demonstrate software.

💬 Chat Section: Communicate with team members through the integrated chat section. Send text messages, links, or share important information alongside video calls.

👥 Support for Multiple Participants: Host productive meetings with support for multiple participants. Collaborate with team members from different locations in real-time.

🎨 Customizable Layout: Tailor the layout of your video conferencing interface to suit your preferences. Arrange video feeds, chat, and shared screens for an optimized collaboration experience.

 ## 🚀 Live Deployed Link: https://camconnect-2064e.web.app/


 ## 📽️ Demo Video: 

https://github.com/ParthRatra/CamConnect/assets/90822015/2af1bb4e-8eaa-40bf-9df2-eec96970b01e


### API Secret and ID

To use this video call web app, you will need to create a ZEGOCLOUD account and obtain an API secret and ID. Follow these steps to set up your API credentials:

1. Go to the [ZEGOCLOUD website](https://www.zegocloud.com/) and create an account.

2. After creating an account, access the Project Management console.

3. Click on the "Create Project" button.

4. Provide a name for your project and select the Web platform.

5. Click on the "Create" button.

6. On the Project Details page, copy the API Secret and API ID values.

7. In the video call web app, open the `src/config.js` file, and paste the API Secret and ID values into the following variables:

```javascript
const ZEGO_API_SECRET = 'your_api_secret_here';
const ZEGO_API_ID = 'your_api_id_here'
```


### Getting Started Locally 🚀

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/ParthRatra/CamConnect.git
```

2. Navigate to the project directory:

```bash
cd <projectdictonary>
```

3. Install the required dependencies:

```bash
npm install
```

4. Start the project locally:

```bash
npm start
```

This will start the project locally and you can access it in your web browser by visiting http://localhost:3000




