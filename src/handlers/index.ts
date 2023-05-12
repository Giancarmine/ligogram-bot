import { Composer } from 'grammy';
import help from './help';
import { Context } from '../context';

const composer = new Composer<Context>();

composer.use(help);

export default composer;