export default function reducer(state = [], action) {
    if (action.type === 'addBucket') {
        return [
            ...state,
            {
                bucketName: action.payload.bucketName
            }
        ]
    }
}