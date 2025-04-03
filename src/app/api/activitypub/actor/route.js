apex.createActor({
    username: 'your-username',
    name: 'Your Website',
    summary: 'A Next.js website with ActivityPub support.',
  });

  apex.on('Follow', async (activity) => {
    console.log('Received Follow activity:', activity);
    //todo: follow requests
  });
  
  apex.on('Create', async (activity) => {
    console.log('Received Create activity:', activity);
    //todo: new posts
  });
