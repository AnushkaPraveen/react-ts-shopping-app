import axios from 'axios';

type PostType = {
    userId?: number;
    id?: number;
    title: string;
    body: string;
  }

type GetUsersResponse = {
    data: PostType[];
};

export const getUsers = async () => {
    try {
        // 👇️ const data: GetUsersResponse
        const { data, status } = await axios.get<GetUsersResponse>('http://jsonplaceholder.typicode.com/posts');

        console.log(JSON.stringify(data, null, 4));

        // 👇️ "response status is: 200"
        console.log('response status is: ', status);

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}


