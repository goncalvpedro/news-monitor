import { Request, Response } from 'express';
import axios from 'axios';

const API_KEY = '1aa9ad7056b54756a43e981d555c3e92';

export const getLatestNews = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`);
        const data = response.data.articles;
        res.render('index', { news: data});
    } catch (error) {
        console.error('Error fetching latest news: ', error);
        res.status(500).send('Error fetching latest news. Please try again later.');
    }
};

export const getNewsBySource = async (req: Request, res: Response) => {
    const source = req.params.source;
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`);
        const data = response.data.articles;
        res.render('source', {news: data, source});
    } catch (error) {
        console.error(`Error fetching news from ${source}: `, error);
        res.status(500).send(`Error fetching news from ${source}. Please try again later.`);
    }
}

export const getAllSources = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?newsApiKey=${API_KEY}`);
        const sources = response.data.sources;
        res.render('all-sources', { sources });
    } catch (error) {
        console.error("Error fetching sources:", error);
        res.status(500).send("Error fetching sources. Please try again later.");
    }
}