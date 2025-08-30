const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all other routes by serving index.html (for SPA-like behavior)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Arin's Portfolio is running on n http://localhost:${PORT}`);
    console.log(`📧 Contact: ratif1444@gmail.com`);
    console.log(`📱 WhatsApp: +91 7065945264`);
    console.log(`\n✨ Portfolio Features:`);
    console.log(`   • Modern gradient design`);
    
    console.log(`   • Responsive layout`);
    console.log(`   • Smooth animations`);
    console.log(`   • Contact form`);
    console.log(`   • Portfolio showcase`);
    console.log(`   • Professional services`);
    console.log(`\n🎯 Press Ctrl+C to stop the server`);
});

