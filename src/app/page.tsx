import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center flex-col space-y-4">
            <h1 className="text-4xl font-bold text-blue-600">Hello World</h1>
            <Button>Click me</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
        </main>
    );
}
