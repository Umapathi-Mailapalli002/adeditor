// pages/api/data.js
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'public','data', 'data.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: 'Error reading the file' });
    }
  } else if (req.method === 'PUT') {
    try {
      const { id, ...updatedFields } = req.body;
      const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

      // Find the index of the item to update
      const index = data.findIndex(item => item.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Item not found' });
      }

      // Update the item
      const updatedData = [
        ...data.slice(0, index),
        { ...data[index], ...updatedFields },
        ...data.slice(index + 1)
      ];

      fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2));
      res.status(200).json(updatedData);
    } catch (error) {
      res.status(500).json({ error: 'Error writing to the file' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
