import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function UserProfile({ params }: any) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Profile</CardTitle>
          <CardDescription className="text-gray-500">
            Welcome to your profile page!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Your profile ID is:{" "}
            <Badge variant="secondary" className="p-2 text-lg bg-orange-500 text-black">
              {params.id}
            </Badge>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
