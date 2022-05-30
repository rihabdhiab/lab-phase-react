import { IS_CURRENTLY_READ ,WANT_TO_READ,IS_READ,ADD_BOOK} from "../Constants/actions-types";

const initialState = {
    books: [
    {
        id: Math.random(),
        title: 'Atomic Habits',
        bookPoster: '/book-poster/atomic habits.jpg',
        author: 'James Clear',
        description: 'An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.',
        pages: 306,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments:[]
        },
      

    {
        id: Math.random(), 
        title: 'It Ends with Us',
        bookPoster: '/book-poster/it ends with us.jpg',
        author: 'Colleen Hoover',
        description: `It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016.[1] It is based on the relationship between Hoover's mother and father.`,
        pages: 376,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments:[]
        },
    
    {
        id: Math.random(), 
        title: 'Reminders of Him',
        bookPoster: '/book-poster/reminders of him.jpg',
        author: 'Colleen Hoover',
        description: `It's a tearjerker romance about a young woman who has been released from prison after a tragic accident and is fighting for custody of her daughter.`,
        pages: 336,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments:[]
    },
    {   id: Math.random(), 
        title: 'The Seven Husbands of Evelyn Hugo',
        bookPoster: '/book-poster/the seven husbands.jpg',
        author: ' Taylor Jenkins Reid',
        description: `The novel tells the story of the fictional Old Hollywood star Evelyn Hugo, who at age 79 gives a final interview to an unknown journalist, Monique Grant.`,
        pages: 400,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments:[]
    },
    {   id: Math.random(), 
        title: 'The Alchemist',
        bookPoster: '/book-poster/the alchemist.jpg',
        author: 'Paulo Coelho',
        description: `The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life's path, and, above all, following our dreams.`,
        pages: 163,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments:[]
    },
    {   id: Math.random(), 
        title: 'The Last Thing He Told Me',
        bookPoster: '/book-poster/the last thing.jpg',
        author: 'Laura Dave',
        description: `A fast-moving, heartfelt thriller about the sacrifices we make for the people we love most.The Last Thing He Told Me by Laura Dave, a page-turner about a woman whose husband has disappeared while being investigated for white-collar crime.`,
        pages: 320,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments: []
    },
    {   id: Math.random(), 
        title: 'The Subtle Art of Not Giving a F*ck',
        bookPoster: '/book-poster/the subtle art.jpg',
        author: 'Mark Manson',
        description: ` The book covers Manson's belief that life's struggles give it meaning and argues that typical self-help books offer meaningless positivity which is neither practical nor helpful, thus improperly approaching the problems many individuals face.`,
        pages: 224,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments:[]
    },
    {   id: Math.random(), 
        title: 'Life Force',
        bookPoster: '/book-poster/life force.jpg',
        author: 'Tony Robbins',
        description: `Transform your life or the life of someone you love with Life Force—the newest breakthroughs in health technology to help maximize your energy and strength, prevent disease, and extend your health span`,
        pages: 720,
        wantToRead: false,
        currentyRead: false,
        read: false,
        Comments: []
    },
    {   id: Math.random(), 
        title: 'Where the Crawdads Sing',
        bookPoster: '/book-poster/where the crawdads sing.jpg',
        author: 'Delia Owens',
        description: `Where the Crawdads Sing is at once an exquisite ode to the natural world, a heartbreaking coming-of-age story, and a surprising tale of possible murder.`,
        pages: 368,
        wantToRead: false,
        currentlyRead: false,
        read: false,
        Comments: []
        }],
        comments:[],
    
}

const bookTrackerReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case IS_CURRENTLY_READ:
            return {
                ...state,
                books: state.books.map(book => book.id === payload? { ...book, currentlyRead:!book.currentlyRead, wantToRead: false,read:false}:book )
            }
        case WANT_TO_READ:
                return {
                    ...state,
                    books: state.books.map(book => book.id === payload? { ...book, wantToRead:!book.wantToRead, currentlyRead:false, read:false}:book )
            }
        case IS_READ:
                return {
                    ...state,
                    books: state.books.map(book => book.id === payload? { ...book, read:!book.read, currentlyRead:false, wantToRead: false,}:book )
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books,payload]
            }
        
        
            /*case DELETE_COMMENT:
                return {
                    ...state,
                   Comments:state.Comments.filter(comment=>comment.id!=payload)
            }*/
            

        default:
            return state
            
    }
}
export default bookTrackerReducer;
