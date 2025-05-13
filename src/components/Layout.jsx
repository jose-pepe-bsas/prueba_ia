
    import React from 'react';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';

    const Layout = ({ children }) => {
      return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;
  