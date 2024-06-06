<?php

namespace XD\CookieConsent\Shortcode;

use XD\CookieConsent\CookieConsent;
use XD\CookieConsent\Model\CookieGroup;
use SilverStripe\Control\Controller;
use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\View\Parsers\ShortcodeParser;

/**
 * Class CookieGroupTable
 *
 * @package XD
 * @subpackage CookieConsent
 */
class CookieGroupTable
{
    /**
     * Register the cookie group table shortcode parser
     */
    public static function register()
    {
        ShortcodeParser::get('default')->register('cookiegrouptable', function ($arguments, $address, $parser, $shortcode) {
            $defaultGroups = CookieConsent::config()->get('required_groups');
            $group = (isset($arguments['group']) && $arguments['group']) ? $arguments['group'] : $defaultGroups[0];
            if ($group = CookieGroup::get()->find('ConfigName', $group)) {
                return $group->renderWith(__CLASS__)->getValue();
            }
            // Return the full string in the CMS so it will not delete itself,
            // but hide on the frond end if group not found
            return Controller::curr() instanceof ContentController ? null : "[cookiegrouptable group=\"$group\"]";
        });
    }
}
