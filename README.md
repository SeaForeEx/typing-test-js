# Typing Speed Test

A clean, interactive web application that measures typing speed (WPM) and accuracy. Built with vanilla JavaScript, HTML, and CSS as part of the Repped In Tech program.

<img width="466" height="317" alt="Typing Test Screenshot" src="https://github.com/user-attachments/assets/9809f80a-ed61-4504-880c-6b2e3e124007" />

## 🚀 Features

- **Random Paragraph Generation**: Displays a random paragraph from a curated collection for each test
- **Real-Time Timer**: Tracks elapsed time in HH:MM:SS format
- **WPM Calculation**: Accurately calculates words per minute based on typing speed
- **Accuracy Measurement**: Compares typed text word-by-word with the original paragraph
- **Responsive Design**: Adapts to different screen sizes for optimal user experience
- **Clean UI**: Intuitive interface with visual feedback for start/stop actions

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Responsive styling with Flexbox, hover effects, and custom color scheme
- **JavaScript (ES6+)**: Core functionality including:
  - DOM manipulation
  - Event listeners
  - Timer intervals
  - Array methods (filter, forEach)
  - Math calculations

## 📂 Project Structure

```
typing-speed-test/
├── index.html      # Main HTML structure
├── styles.css      # Responsive styling
├── index.js        # Application logic
└── README.md       # Project documentation
```

## 🎯 How to Use

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/SeaForeEx/typing-test-js.git
   cd typing-speed-test
   ```

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Use Live Server in VS Code, or
   - Run a local server

### Using the Application

1. Click **"Start Test"** to begin
2. A random paragraph will appear
3. Type the paragraph in the textarea
4. Click **"Stop Test"** when finished
5. View your typing speed (WPM) and accuracy percentage

## 💡 Key Learnings

This project demonstrates proficiency in:

- **DOM Manipulation**: Selecting and updating HTML elements dynamically
- **Event Handling**: Managing user interactions with buttons and input fields
- **Timing Functions**: Using `setInterval()` and `clearInterval()` for accurate time tracking
- **Data Processing**: Calculating WPM and accuracy through string manipulation and array methods
- **State Management**: Tracking test status, start time, and user input
- **Responsive Design**: Creating layouts that work across different devices

## 🧮 How It Works

### Speed Calculation
```javascript
WPM = (Word Count / Elapsed Minutes)
```

### Accuracy Calculation
```javascript
Accuracy = (Correct Words / Total Words) × 100
```

## 🎨 Design Highlights

- **Color Scheme**: Soft yellow background (#FFFACD) with cornflower blue text (#6495ED)
- **Typography**: Monospace font (Courier New) for a typing-focused aesthetic
- **Interactive Elements**: Hover effects with smooth transitions and shadow depth
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🔮 Future Enhancements

- [ ] Add difficulty levels (easy, medium, hard)
- [ ] Include a leaderboard with local storage
- [ ] Show real-time character-by-character accuracy highlighting
- [ ] Add keyboard sound effects
- [ ] Implement a practice mode with specific word sets
- [ ] Track typing statistics over time
- [ ] Add dark mode toggle

## 📊 Metrics Tracked

- **Typing Speed**: Words per minute (WPM)
- **Accuracy**: Percentage of correctly typed words
- **Time Elapsed**: Duration of typing test in HH:MM:SS format

## 🤝 Contributing

This is a learning project, but feedback and suggestions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 👨‍💻 Author

**[Charles Bridgers IV]**
- GitHub: [@SeaForeEx](https://github.com/SeaForeEx)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/charlesbridgersiv)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built as part of the [REPPED IN TECH](https://reppedin.tech) program
  
[<img width="389" height="139" alt="REPPED IN TECH Logo" src="https://github.com/user-attachments/assets/edfd9d31-c13b-4514-b78e-c080a3797ab7" />](https://reppedin.tech)


---

**Live Demo**: [View the app](https://typing-test-js-c4.netlify.app/)

Made with ⌨️ by [Charles Bridgers IV]
