import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center flex-col space-y-4 p-4">
            <h1 className="text-4xl font-bold text-blue-600">Hello World</h1>

            <div className="flex space-x-4">
                <Button>Click me</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
            </div>

            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Project Portfolio</CardTitle>
                    <CardDescription>Explore my latest projects and skills</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>I'm a passionate developer creating innovative web solutions.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Learn More</Button>
                    <Button>Contact</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
