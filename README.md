# ArchiNest

A modern architectural service platform built with Next.js, TypeScript, and MongoDB. ArchiNest allows users to browse architectural services and connect with professionals.

## 🌐 Live Demo

**Live Application:** [https://archinest.vercel.app](https://archinest-psi.vercel.app/)

**GitHub Repository:** [https://github.com/yourusername/archinest](https://github.com/sh-shahedul/archinest)

## 🎯 Project Overview

ArchiNest is a full-stack web application that connects users with architectural services. Users can explore different service categories, view available architects, and choose services based on their requirements.

## ✨ Features

- **User Authentication** - Secure login and registration with NextAuth
- **Service Browsing** - Browse available architectural services
- **Service Selection** - Users can view and choose from various architectural services
- **Responsive Design** - Mobile-first responsive UI with Tailwind CSS
- **User Dashboard** - Personalized user dashboard
- **Modern UI** - Clean and intuitive interface with smooth animations

## 🏗️ Project Architecture

```
archinest/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── services/
│   ├── about/
│   ├── contact/
│   ├── blog/
│   ├── dashboard/
│   │   └── allService/
│   └── not-found.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── form.tsx
│   │   └── ... (other UI components)
│   ├── form/
│   │   ├── LoginForm.tsx
│   │   └── RegistrationForm.tsx
│   ├── buttons/
│   │   └── NavLinks.tsx
│   └── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── (utilities and helpers)
├── public/
│   ├── archinest.png
│   └── regester.png
├── styles/
│   └── globals.css
└── tsconfig.json
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.1** - React framework with SSR
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI Components & Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon set
- **Class Variance Authority** - CSS-in-JS styling

### Backend & Database
- **MongoDB 7.0.0** - NoSQL database
- **NextAuth 4.24.13** - Authentication solution
- **Bcrypt 6.0.0** - Password hashing

### Form & Validation
- **React Hook Form 7.71.1** - Efficient form handling
- **Zod** (recommended) - Schema validation

### Development Tools
- **ESLint** - Code quality
- **Tailwind Merge** - Class merging utility
- **Clsx** - Conditional class names

## 📋 Dependencies

```json
{
  "dependencies": {
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@types/bcrypt": "^6.0.0",
    "axios": "^1.13.2",
    "bcrypt": "^6.0.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dotenv": "^17.2.3",
    "framer-motion": "^12.25.0",
    "lucide-react": "^0.562.0",
    "mongodb": "^7.0.0",
    "next": "16.1.1",
    "next-auth": "^4.24.13",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.1",
    "react-icons": "^5.5.0",
    "tailwind-merge": "^3.4.0"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/archinest.git
cd archinest
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here

# OAuth Providers (Optional)
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page |
| Services | `/services` | Browse all architectural services |
| About | `/about` | About ArchiNest |
| Contact | `/contact` | Contact form |
| Blog | `/blog` | Blog posts and articles |
| Login | `/login` | User login page |
| Register | `/register` | New user registration |
| Dashboard | `/dashboard/allService` | User dashboard with services |
| 404 | `/*` | Not found page |

## 🔐 Services Architecture

### Service Categories
Users can choose from the following architectural services:

- **Residential Design** - Home and apartment design
- **Commercial Architecture** - Office and business space design
- **Interior Design** - Space planning and decoration
- **Urban Planning** - City and landscape design
- **Renovation** - Renovation and remodeling services
- **Consultation** - Expert consultation services

### User Service Selection Flow

```
1. User browses services page
   ↓
2. Views available architectural services
   ↓
3. Reads service details and descriptions
   ↓
4. Selects desired service(s)
   ↓
5. Add to cart or request consultation
   ↓
6. Checkout and confirmation
```

## 🔑 Key Features

### Authentication
- Secure user registration and login
- Password hashing with bcrypt
- Session management with NextAuth
- Protected routes and API endpoints

### Service Management
- Display all available services
- Service details and descriptions
- Service filtering and search
- User service selection interface

### User Dashboard
- View selected services
- Manage profile information
- View service history
- Logout functionality

### Responsive Design
- Mobile-first approach
- Tablet and desktop support
- Touch-friendly interface
- Adaptive layouts

## 📦 Building for Production

```bash
npm run build
npm run start
```

## 🧪 Development Workflow

### Code Quality
```bash
npm run lint
```

### Component Structure
- Keep components small and reusable
- Use TypeScript for type safety
- Follow Next.js best practices
- Use Tailwind CSS for styling

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/archinest` |
| `NEXTAUTH_URL` | Application URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | NextAuth secret key | Generate with `openssl rand -base64 32` |

## 🎨 Design System

### Color Palette
- **Primary Orange** - `#FF900E`
- **Secondary Orange** - `#FFB95C`
- **Accent Orange** - `#FF6A3D`
- **Background** - `#FFF4E7`
- **Text Dark** - `#131313`
- **Text Gray** - `#727272`

### Typography
- Headings: Bold, larger sizes
- Body: Regular weight, readable size
- Buttons: Semibold, clear CTA

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support & Contact

For support, email us at support@archinest.com or visit [contact page](/contact).

## 🗺️ Roadmap

- [ ] Payment integration
- [ ] Review and rating system
- [ ] Advanced search and filters
- [ ] Multi-language support
- [ ] Mobile app
- [ ] Social media integration
- [ ] Email notifications
- [ ] Real-time chat support

## 👨‍💻 Author

**ArchiNest Team**
- Website: [archinest.com](https://archinest.com)
- GitHub: [@archinest](https://github.com/archinest)

## 🙏 Acknowledgments

- Radix UI for accessible components
- Tailwind CSS for styling
- Next.js team for the amazing framework
- All contributors and supporters

---

**Last Updated:** January 2026
**Version:** 1.0.0