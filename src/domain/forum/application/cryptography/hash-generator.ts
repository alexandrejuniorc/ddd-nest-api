export abstract class HashGenerator {
  abstract hash(plain: string): Promise<string>
}

// SOLID

// S - Single Responsibility Principle
// O - Open/Closed Principle
// L - Liskov Substitution Principle
// I - Interface Segregation Principle
// D - Dependency Inversion Principle
