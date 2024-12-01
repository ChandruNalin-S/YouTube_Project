import React from 'react'


const commentsData = [
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[
          {
            name:"Chandru",
            text:"nice vidoes of your college rec",
            replies:[
              {
                name:"Chandru",
                text:"nice vidoes of your college rec",
                replies:[
                  {
                    name:"Chandru",
                    text:"nice vidoes of your college rec",
                    replies:[
                      {
                        name:"Chandru",
                        text:"nice vidoes of your college rec",
                        replies:[],
                      }
                
                    ]
                  },
                ],
              }
        
            ]
          },
        ],
      }

    ]
  },
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[
          {
            name:"Chandru",
            text:"nice vidoes of your college rec",
            replies:[
              {
                name:"Chandru",
                text:"nice vidoes of your college rec",
                replies:[],
              }
        
            ]
          },
        ],
      }

    ]
  },
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[],
      }

    ]
  },
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[
          {
            name:"Chandru",
            text:"nice vidoes of your college rec",
            replies:[
              {
                name:"Chandru",
                text:"nice vidoes of your college rec",
                replies:[],
              }
        
            ]
          },
        ],
      }

    ]
  },
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[],
      }

    ]
  },
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[],
      }

    ]
  },
  {
    name:"Chandru",
    text:"nice vidoes of your college rec",
    replies:[
      {
        name:"Chandru",
        text:"nice vidoes of your college rec",
        replies:[],
      }

    ]
  }, 

];



const Comments = ({commentText})=>{
  return(
    <div className='shadow-sm p-2 rounded-lg bg-gray-100 m-2'>
      <p className='font-bold'>{commentText.name}</p>
      <p>{commentText.text}</p>
    </div>
  )
}



const CommentLists = ({comments})=>{
  return comments.map((comment,index)=>{ return (
    <div key={index}>
       <Comments commentText = {comment} />
       <div className='border border-l-black ml-6'>
       <CommentLists comments={comment.replies} />{/* this is called as recursion function ,"calling the function itself" purpose of code is to display n-level nesting comments in watchpage */}
       </div>
    </div>

  )})
}



const CommentContainer = () => {
  return (
    <div>
      <h1 className='font-bold text-xl'>Comments:</h1>
      <CommentLists comments={commentsData} />
    </div>
  )
}

export default CommentContainer
