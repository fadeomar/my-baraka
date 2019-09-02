INSERT INTO baraka_user
    (username , password , email)
VALUES
    ('fade','1','fade@fade.com'),
    ('test','1','test@fade.com');
INSERT INTO baraka_list
    (name)
VALUES
    ('project1'),
    ('project1');
INSERT INTO baraka_item
    (list_id, user_id, content, is_done)
VALUES
    (1, 1, 'test text', true),
    (2, 2, 'test text 2', false);