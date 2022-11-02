import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
      banner:{
        title: 'All the animals',
        background: 'allanimals.jpg' 
        }
    });
}
export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner:{
          title: 'Dogs',
          background: 'banner_dog.jpg' 
          }
      });
}
export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner:{
          title: 'Cats',
          background: 'banner_cat.jpg' 
          }
      });
}
export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner:{
          title: 'Fishes',
          background: 'banner_fish.jpg' 
          }
      });
}