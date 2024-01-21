import { MongoClient } from 'mongodb'

export default async (req: Request) => {
  const client = new MongoClient(process.env.MONGO_DB_URL || '')

  if (req.method !== 'GET') {
    return new Response('Bad request', { status: 400 })
  }

  try {
    const database = client.db(process.env.MONGO_DB_NAME)
    const visitsCollection = database.collection<{ total: number }>('visits_count')

    const [entry] = await visitsCollection.find().toArray()

    if (!entry) {
      throw new Error('No entry found for visits counter')
    }

    await visitsCollection.updateOne({ _id: entry._id }, { $inc: { total: 1 } })

    return new Response(JSON.stringify({ visitNumber: entry.total + 1 }))
  } catch (error) {
    console.error(error.message)
    return new Response('Something went wrong', { status: 500 })
  } finally {
    await client.close()
  }
}
