import axios from 'axios'

export const getAllTasksRequest = async () => {
    return await axios.get('http://localhost:3001/getAllTasks');
}
