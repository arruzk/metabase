/* @flow */

import Question from "../Question";
import Database from "./Database";
import Table from "./Table";

import { nyi } from "../utils";

/**
 * Wrapper class for a segment. Belongs to a {@link Database} and possibly a {@link Table}
 */
export default class Segment {
    displayName: string;
    description: string;

    database: Database;
    table: ?Table;

    @nyi newQuestion(): Question {
        return new Question();
    }
}
