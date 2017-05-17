<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'test_riot');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'root');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         't5FA(!vuWXIk-`b|7+Jw3d97?[]_zm!Y-o&GOj<YiH%/xb0C2A:w>S[3/_>QH$n&');
define('SECURE_AUTH_KEY',  'lrDYt)yfuL$oBjL2z9og 90_VlKB.p7}S<QGRKxzs=O( v=no0)+|X:`%+89Pq5r');
define('LOGGED_IN_KEY',    '^|X0_7s%SrWdH7*TBZl[w8Zxm}^5tXy7r/[u<u=/lX!7 u%[{Xss(p+.Vv_2@4]I');
define('NONCE_KEY',        '{m9 (|~]RxS&,}UX~q]`6Zd#J=FZ*JEr>`N27TZ+S[r_?*%ik5GjROf}s?EdNk/g');
define('AUTH_SALT',        'iei[6iNvHO6I{-]L =p5>fm/-99 /sI52kYJv,c?LeZ1T^X_kJ;;uWLT^ANi/?9s');
define('SECURE_AUTH_SALT', '}S6BJs=~SrM5nDaHLh&k?/5.O%C4a8l,/b!Ix[0}>?o~B!S749Y~_WRbDWsmI ]4');
define('LOGGED_IN_SALT',   '-$lLKJe0dn$3Msk3-xsF%? rz8&R)4rJxGL|:!|@q,neR^;0OxHUI8.OzE6,*_hx');
define('NONCE_SALT',       'NP &Bq*Cx4F-#nh[.YN@2D)-}!fC(2a;#q|qrv{iI_%lK{{s!CV`?3gzKZ`( 39I');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
