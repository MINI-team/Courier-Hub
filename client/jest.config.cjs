module.exports = {
    // Ścieżki do plików, które mają zostać przetestowane
    testMatch: [
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/src/**/*.test.tsx',
    ],

    // Ignoruj pliki testowe znajdujące się w folderze node_modules
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],

    // Moduły do transformacji (np. TypeScript)
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.(js|jsx)$": "babel-jest"
    },

    // Możesz dodać inne opcje konfiguracyjne w zależności od Twoich potrzeb
    // ...

    // Dodatkowe opcje
    verbose: true,
};
