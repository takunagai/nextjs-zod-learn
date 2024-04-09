export async function GET() {
    const user = {
        id: 1,
        firstname: 'John',
        lastName: 'Doe',
        age: 30,
    }

    return Response.json(user)
}
