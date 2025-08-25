# Next.js Expense Tracker

A modern, AI-powered expense tracking application built with Next.js 15, featuring intelligent insights, beautiful charts, and a responsive design.

## ✨ Features

### 📊 **Expense Management**
- Add, edit, and delete expense records
- Categorize expenses with smart suggestions
- Track spending with detailed analytics
- View expense history with filtering options

### 🤖 **AI-Powered Insights**
- Intelligent spending pattern analysis
- Personalized financial recommendations
- AI-generated insights and tips
- Interactive Q&A with AI assistant

### 📈 **Analytics & Visualization**
- Interactive charts and graphs
- Expense statistics and trends
- Best and worst spending categories
- Visual spending breakdowns

### 🔐 **Authentication & Security**
- Secure user authentication with Clerk
- User profile management
- Protected routes and data
- Guest mode for exploration

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Dark/Light theme toggle
- Beautiful gradient designs
- Mobile-first approach

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI Integration**: OpenAI API
- **Charts**: Chart.js with React-Chartjs-2
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- OpenAI API key
- Clerk account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd next-expanse-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/expense_tracker"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-expanse-tracker/
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── sign-in/           # Authentication pages
│   ├── sign-up/           # Authentication pages
│   └── page.tsx           # Main dashboard
├── components/            # React components
│   ├── AddNewRecord.tsx   # Expense form
│   ├── AIInsights.tsx     # AI insights component
│   ├── BarChart.tsx       # Chart components
│   ├── ExpenseStats.tsx   # Statistics display
│   ├── RecordHistory.tsx  # Expense history
│   └── ...                # Other components
├── contexts/              # React contexts
├── lib/                   # Utility functions
├── prisma/                # Database schema
└── types/                 # TypeScript types
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### AI Insights
The application uses OpenAI's API to analyze your spending patterns and provide personalized insights. It can:
- Identify unusual spending patterns
- Suggest budget optimizations
- Provide financial tips
- Answer questions about your spending

### Expense Tracking
- **Add Records**: Quick expense entry with category suggestions
- **Categorization**: Automatic and manual category assignment
- **History**: Complete expense history with search and filtering
- **Analytics**: Visual representation of spending patterns

### Responsive Design
The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
- Check the [Issues](../../issues) page
- Create a new issue with detailed information
- Contact the development team

## 🔮 Roadmap

- [ ] Export functionality (PDF/CSV)
- [ ] Budget setting and alerts
- [ ] Multi-currency support
- [ ] Receipt image upload
- [ ] Integration with banking APIs
- [ ] Mobile app version

---

**Built with ❤️ using Next.js, TypeScript, and AI**
